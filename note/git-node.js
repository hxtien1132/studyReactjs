// source code : + hệ thống giúp lưu trữ mọi thay đổi code 
//               + hỗ trợ nhiều người làm việc cùng lúc

// 1. $ git init : Lệnh này sẽ tạo một thư mục mới có tên .git,
                //  thư mục này chứa tất cả các tập tin .

// 2. $ git clone namelink : Sao chép một kho chứa đã tồn tại :Câu lệnh trên sẽ tạo một thư mục mới có tên giống trên của Repo.
// 3. $ git add . :cập nhật thay đổi
// 4. $ git commit -m "message" : Sau lệnh add, bạn cần sử dụng câu lệnh Commit để đây thông tin thay đổi lên Local Respository;
// 5. $ git remote add origin <remote_url> : " nếu chưa tồn tại remote trên server thì bạn cần add mới một remote trước rồi mới push"
// 6. $ git push origin <name_branch> : cập nhât lên server
// 7. $ git branch <name_branch> : Để tạo mới một branch:
// 8. $ git branch -b <name_branch> :Để chuyển và tạo mới:

// 9. $ git checkout master:  cần phải checkout ra khỏi branch hiện tại cần gộp để vào branch master,
// sau đó thì dùng lệnh merge để ghép branch mới vào master:
// 10.$ git merge <new_branch> : gộp nhánh

// 3. $ git log : xem lại lịch sủ commit
// 4. $ git diff : xem lại thay đổi trước khi push