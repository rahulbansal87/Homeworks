def range(start, ending)
  return [] if ending < start
  return [ending] if start == ending

  [start] + range(start + 1, ending)
end

def range_iterative(start, ending)
  range = []
  until start > ending
    range << start
    start += 1
  end

  range
end

def exp(b, n)
  return 1 if n == 0

  b * exp(b, n - 1)
end

def exp2(b, n)
  return 1 if n == 0
  return b if n == 1

  if n.even?
    exp2(b, n / 2) * exp2(b, n / 2)
  else
    b * exp2(b, n - 1)
  end
end

class Array
  def deep_dup
    new_array = []

    self.each do |element|
      if element.is_a?(Array)
        new_array << [element.deep_dup]
      else
        new_array << element
      end
    end

    new_array
  end
end

def fib(n)
  return [1] if n == 1
  return [1, 1] if n == 2

  fib(n - 1) + [fib(n - 1)[-1] + fib(n - 1)[-2]]
end

def fib2(n)
  return [1] if n == 1
  return [1, 1] if n == 2

  fib_array = [1, 1]
  while n > 2
    fib_array << fib_array[-1] + fib_array[-2]
    n -= 1
  end

  fib_array
end

def permutations(array)
  return [array] if array.length == 1

  arr = []
  array.length.times do
    prev_perm = permutations(array[1..-1])
    num = array[0]
    prev_perm.each do |ary|
      arr << [num] + ary
    end
    array.rotate!
  end

  arr
end

def bsearch(array, target)
  index = array.length / 2

  return index if target == array[index]
  return nil if array.length <= 1

  if target < array[index]
    bsearch(array[0..index - 1], target)
  else
    result = bsearch(array[index + 1..-1], target)
    if result.nil?
      return nil
    else
      index + 1 + result
    end
  end
end

def merge_sort(array)
  return array if array.length == 1
  if array.length.odd?
    merge(merge_sort(array[0..array.length / 2]), merge_sort(array[(array.length / 2+1)..-1]))
  else
    merge(merge_sort(array[0...array.length / 2]), merge_sort(array[(array.length / 2)..-1]))
  end
end

def merge(array1, array2)
  new_array = []
  until array1.empty? || array2.empty?
    if array1[0] > array2[0]
      new_array << array2.shift
    else
      new_array << array1.shift
    end
  end

  if array1.empty?
    new_array += array2
  elsif array2.empty?
    new_array += array1
  end
  new_array
end

def subsets(array)

end
