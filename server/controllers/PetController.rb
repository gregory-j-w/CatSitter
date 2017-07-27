class PetController < ApplicationController

  get '/' do
    pets = Pet.all
    pets.to_json
  end

  get '/:id' do
    id = params[:id]
    pet = Pet.find(id)
    pet.to_json
  end

  post '/' do
    request_body = JSON.parse(request.body.read)
    token = params[:token]
    user = User.find_by(token: token)
    pet = Pet.new(request_body)
    pet.ownerid = user.id
    pet.save
    Pet.all.to_json
  end

  patch '/:id' do
    request_body = JSON.parse(request.body.read)
    token = params[:token]
    id = params[:id]
    user = User.find_by(token: token)
    pet = Pet.find(id)
    pet.update_attributes(request_body)
    pet.save
    pet.to_json
  end

  delete '/:id' do
    id = params[:id]
    pet = Pet.find(id)
    pet.destroy
    pet.to_json
  end
end
