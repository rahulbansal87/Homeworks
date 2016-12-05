class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    @books = Book.new
  end

  def create
    @books = Book.new(book_params)

    if @books.save
      redirect_to books_url
    else
      render 'new'
    end
  end

  def destroy
    @books = Book.destroy(params[:id])

    redirect_to @books
  end

  private

  def book_params
    params.require(:book).permit(:title, :author)
  end
end
