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
    pet = Pet.new(request_body)
    pet.save
    Pet.all.to_json
  end

  patch '/:id' do
    id = params[:id]
    pet = Pet.find(id)
    request_body = JSON.parse(request.body.read)
    pet.update_attributes(request_body)
    pet.save
    Pet.all.to_json
  end

  delete '/:id' do
    id = params[:id]
    pet = Pet.find(id)
    pet.destroy
    Pet.all.to_json
  end
end
