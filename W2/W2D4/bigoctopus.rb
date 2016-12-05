def sluggish_octopus(fish)
  sorted = false
  until sorted
    sorted = true
    (fish.length - 1).times do |i|
      if fish[i].length > fish[i + 1].length
        fish[i], fish[i + 1] = fish[i + 1], fish[i]
        sorted = false
      end
    end
  end

  fish[-1]
end


class Array
  def merge_sort(&prc)
    mid = length / 2
    return self if length <= 1

    left = self.take(mid).merge_sort(&prc)
    right = self.drop(mid).merge_sort(&prc)

    Array.merge(left, right, &prc)
  end

  private

  def self.merge(left, right, &prc)
    prc ||= Proc.new { |x, y| x <=> y }

    arr = []
    until left.empty? || right.empty?
      if prc.call(left.first, right.first) == 1
        arr << right.shift
      else
        arr << left.shift
      end
    end

    arr + left + right
  end
end

def dominant_octopus(fish)
  prc = Proc.new { |x, y| x.length <=> y.length }

  fish.merge_sort(&prc)[-1]
end

def clever_octopus(fish)
  longest_fish = nil
  fish.each do |f|
    longest_fish = f if longest_fish == nil || longest_fish.length < f.length
  end

  longest_fish
end

def slow_dance(direction, tiles_arr)
  tiles_arr.each_with_index { |dir, idx| return idx if dir == direction }
end

def fast_dance(direction, new_tiles)
  new_tiles[direction]
end

fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

p sluggish_octopus(fish)
p dominant_octopus(fish)
p clever_octopus(fish)

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
new_tiles_data_structure = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left_up" => 7
}

p slow_dance("up", tiles_array) #=> 0
p slow_dance("right-down", tiles_array) #=> 3
p fast_dance("up", new_tiles_data_structure) #=> 0
p fast_dance("right-down", new_tiles_data_structure) #=> 3
