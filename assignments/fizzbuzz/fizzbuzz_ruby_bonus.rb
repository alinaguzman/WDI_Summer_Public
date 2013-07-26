# Done in JS? Now do it in Ruby.
numbers = 1..100
numbers.each do |n|
   if n%5 == 0 && n%3 == 0
     puts "Fizz Buzz"
   elsif n%3 == 0
     puts "Fizz"
   elsif n%5 == 0
     puts "Buzz"
   else
     puts n
   end
end
