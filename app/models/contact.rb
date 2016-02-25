class Contact < ActiveRecord::Base

  validates :first_name, :last_name, :contact_number, presence: true

end
