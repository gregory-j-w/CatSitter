require 'SecureRandom'

class UserController < ApplicationController
  #post request to /users/register
  post '/register' do
    user_details = JSON.parse(request.body.read)
    user = User.new

    user.firstname = user_details["firstname"]
    user.lastname = user_details["lastname"]
    user.email = user_details["email"]
    user.password = user_details["password"]
    user.phone = user_details["phone"]
    user.street = user_details["street"]
    user.city = user_details["city"]
    user.state = user_details["state"]
    user.zip = user_details["zip"]
    user.token = SecureRandom.hex

    user.save!
    user.to_json
  end

  get '/' do
    token = params[:token]
    user = User.find_by(token:token)
    pet = Pet.find_by(ownerid:user.id)
    appointment = Appointment.find_by(ownerid:user.id)
    {user: user, pet: pet, appointment: appointment}.to_json
  end

  #post request to /users/login
  post '/login' do
    user_details = JSON.parse(request.body.read)
    user = User.find_by({email: user_details["email"]})
    if user && user.authenticate(user_details["password"])
      user.to_json
    else
      "ACCESS DENIED"
    end
  end
end
