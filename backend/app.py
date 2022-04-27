from paddleocr import PaddleOCR
import cv2
from flask import Flask, send_file, Response, request, jsonify
from io import BytesIO
import base64

app = Flask(__name__)
# cors = CORS(app)

# this is a good comment
@app.route("/image", methods=['GET', 'POST'])
def image():
    resu = ""
    if request.method == 'GET':
        return resu, 200

    if request.method == 'POST':
        data = request.get_json()
        inputImage = open('input.jpeg', 'wb')
        inputImage.write(base64.b64decode((data)))
        inputImage.close()
        ocr = PaddleOCR(lang="en")
        img_path = 'input.jpeg'
        result = ocr.ocr(img_path)
        res = ""
        for line in result:
            res += (line[1][0] + "\n")
        resu = res
        return resu, 200

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)