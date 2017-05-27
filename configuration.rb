require 'sinatra'
require 'sinatra/flash'
require 'json'

set :database, "sqlite3:about.sqlite3"
set :sessions, true

require './app.rb'