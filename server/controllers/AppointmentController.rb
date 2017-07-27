class AppointmentController < ApplicationController

  get '/' do
    appointments = Appointment.all
    appointments.to_json
  end

  get '/:id' do
    id = params[:id]
    appointment = Appointment.find(id)
    appointment.to_json
  end

  post '/' do
    request_body = JSON.parse(request.body.read)
    token = params[:token]
    user = User.find_by(token: token)
    appointment = Appointment.new(request_body)
    appointment.ownerid = user.id
    appointment.save!
    Appointment.all.to_json
  end

  patch '/:id' do
    request_body = JSON.parse(request.body.read)
    token = params[:token]
    id = params[:id]
    user = User.find_by(token: token)
    apppointment = Appointment.find(id)
    appointment.update_attributes(request_body)
    appointment.save
    appointment.to_json
  end

  delete '/:id' do
    id = params[:id]
    appointment = Appointment.find(id)
    appointment.destroy
    Appointment.all.to_json
  end
end
