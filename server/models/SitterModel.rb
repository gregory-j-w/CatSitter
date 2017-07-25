class Sitter < ActiveRecord::Base
  self.table_name = 'sitters'
  has_secure_password
end
