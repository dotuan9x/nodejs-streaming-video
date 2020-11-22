# Streaming video project using NodeJS

Mô hình Streaming Video từ một file .mp4 

![Mô hình Stream Video](https://static1.tothenew.com/blog/wp-content/uploads/2015/08/HLS.png)


## Prerequisites (Yêu cầu trước khi cài đặt)
Trước khi sử dụng cần phải cài đặt [FFmpeg](https://ffmpeg.org/), hỗ trợ encode video từ mp4 thành các file chunk .ts để có thể stream được
* Đối với MacOS thì sử dụng Homebrew để cài đặt bằng câu lện `brew install ffmpeg`  

## Installing (Hướng dẫn cài đặt)
Để sử dụng cần thực hiện các bước sau:

Cấu hình các biến môi trường bằng cách tạo 1 file `.env` và thêm vào nội dung sau:
```
APPLICATION_ENV="development" # Môi trường development/sandbox/production
PORT=8010 # Port sử dụng
```

Tiếp theo cần cài đặt các `node_modules` được sử dụng trong project bằng cách đánh câu lệnh:
```
npm install 
```

Sau đó đánh câu lệnh `npm run start` để khởi chạy phần source

## Contributors

Thanks to the following people who have contributed to this project:
* [@dotuan9x](https://github.com/dotuan9x) 📖
* [@thinhdnp](#) 🐛

## Reference (Tài liệu tham khảo)

[How to create .mpd or .m3u8 video file on the server using FFMPEG for Adaptive Streaming
](https://medium.com/@mayur_solanki/how-to-create-mpd-or-m3u8-video-file-from-server-using-ffmpeg-97e9e1fbf6a3)
[Apple HTTP Live Streaming (HLS)](https://www.tothenew.com/blog/apple-http-live-streaming-hls/)
