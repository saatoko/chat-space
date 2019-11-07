class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :content, presence: true, unless: :image?
  mount_uploader :image, ImageUploader

  # def show_current_title
  #   @messages.each do |title|
  #     title.group_id 
  #   end
  # end

  # def show_current_member
  #   @groups.each do |member|
  #     member.user_id
  #   end
  # end
end