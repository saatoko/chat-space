json.(@message, :content)
json.image @message.image.url
json.created_at @message.created_at
json.user_name @message.user.name
json.id @message.id
json.id @group.id



