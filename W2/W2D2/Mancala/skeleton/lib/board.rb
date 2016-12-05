class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1, @name2 = name1, name2
    @cups = Array.new(14) { [] }
    place_stones
  end

  def place_stones
    (0...@cups.length).each do |idx|
      4.times do
        @cups[idx] << :stone unless idx == 6 || idx == 13
      end
    end
  end

  def valid_move?(start_pos)
    if !start_pos.between?(0, 13) || @cups[start_pos].empty?
      raise "Invalid starting cup"
    end
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []
    idx = start_pos

    until stones.empty?
      idx += 1
      idx = 0 if idx > 13

      if idx == 6
        @cups[idx] << stones.pop if current_player_name == @name1
      elsif idx == 13
        @cups[idx] << stones.pop if current_player_name == @name2
      else
        @cups[idx] << stones.pop
      end
    end

    render
    next_turn(idx)
  end

  def next_turn(ending_cup_idx)
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].length == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..5].all?(&:empty?) || @cups[7..12].all?(&:empty?)
  end

  def winner
    if @cups[13].length == @cups[6].length
      :draw
    elsif @cups[13].length > @cups[6].length
      @name2
    else
      @name1
    end
  end
end
