
let OSS = require("ali-oss")
let config = require('./oss-config.json')
let getAllFileNames = require('./utility.js').getAllFileNames

// 配置oss信息
let client = new OSS({
  region: config.region,
  accessKeyId: config.accessKeyId,
  accessKeySecret: config.accessKeySecret,
  bucket: config.bucket
})

let completeFunc = null

function uploadFiles(resPath, ossPath, complete) {
  completeFunc = complete
  let files = getAllFileNames(resPath)
  do_upload(files, ossPath, resPath)
}

function do_upload(files, ossPath, resPath) {
  let i = 0
  let length = files.length
  let upload = function () {
    let filePath = files[i]
    var index = filePath.indexOf(resPath)
    var lastPath = filePath.substring(index + resPath.length + 1);
    let key = ossPath + lastPath
    key = key.replace(/\\/g, '/')
    put(key, filePath, function (result) {
      if (result) {
        console.log(filePath + " 第" + (i + 1) + "完成!")
        i++
        if (i >= length) {
          console.log(length + "个文件全部上传完成!")
          if (completeFunc) {
            completeFunc()
          }
        } else {
          upload()
        }
      } else {
        console.log(filePath + " 第" + (i + 1) + "失败重试!")
        upload()
      }
    })
  }
  upload()
}

async function put(name, filePath, callback) {
  try {
    let result = await client.put(name, filePath);
    callback(true)
  } catch (e) {
    console.log(e)
    callback(false)
  }
}

module.exports.uploadFiles = uploadFiles
