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
    appointment = Appointment.new(request_body)
    appointment.save
    Appointment.all.to_json
  end

  patch '/:id' do
    id = params[:id]
    appointment = Appointment.find(id)
    request_body = JSON.parse(request.body.read)
    appointment.update_attributes(request_body)
    appointment.save
    Appointment.all.to_json
  end

  delete '/:id' do
    id = params[:id]
    appointment = Appointment.find(id)
    appointment.destroy
    Appointment.all.to_json
  end
end
