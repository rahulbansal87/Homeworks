class Stack
  def initialize
    @stack = []
  end

  def add(el)
    @stack << el
  end

  def remove
    @stack.pop
  end

  def show
    @stack.dup
  end
end

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue << el
  end

  def dequeue
    @queue.shift
  end

  def show
    @queue.dup
  end
end

class Map
  def initialize
    @my_map = []
  end

  def assign(key, value)
    idx = @my_map.index { |pair| pair[0] == key }
    idx.nil? ? @my_map.push([key, value]) : @my_map[idx][1] = value
    @my_map
  end

  def lookup(key)
    @my_map.each { |pair| return pair[1] if pair[0] == key }
    nil
  end

  def remove(key)
    @my_map.delete_if { |pair| pair[0] == key }
  end

  def show
    deep_dup(@my_map)
  end

  def deep_dup(arr)
    arr.map { |el| el.is_a?(Array) ? deep_dup(el) : el }
  end
end
