# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false, index: true|
### Association
- has_many :groups,  through:  :groups_users
- has_many :messages
- has_many :groups_users

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
### Association
- has_many :users,  through:  :groups_users
- has_many :messages
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Option|
|------|----|------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belong_to :group
- belong_to :user

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|body|text|null: false|
|image|string||
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to : group