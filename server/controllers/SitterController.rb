require 'SecureRandom'

class SitterController < ApplicationController

  post '/login' do
    sitter_details = JSON.parse(request.body.read)
    sitter = Sitter.find_by({username: sitter_details["username"]})
    if sitter && user.authenticate(sitter_details["password"])
      sitter.to_json
    else
      "ACCESS DENIED"
    end
  end
end
