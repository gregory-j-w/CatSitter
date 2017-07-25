require 'bundler'
Bundler.require

require './models/UserModel'
require './models/PetModel'
require './models/SitterModel'
require './models/AppointmentModel'

require './controllers/ApplicationController'
require './controllers/AppointmentController'
require './controllers/PetController'
require './controllers/SitterController'
require './controllers/UserController'


run Sinatra::Application

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  database: 'sittertest1'
)

map('/appointments'){run AppointmentController}
map('/pets'){run PetController}
map('/sitters'){run SitterController}
map('/users'){run UserController}
