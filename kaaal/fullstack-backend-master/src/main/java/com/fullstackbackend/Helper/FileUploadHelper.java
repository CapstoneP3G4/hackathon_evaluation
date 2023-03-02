package com.fullstackbackend.Helper;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.UUID;

@Component
public class FileUploadHelper {

    public static final String UPLOAD_DIR = "D:\\Final submission\\hackathon_evaluation\\my-app\\public\\upload\\";

    public static String uploadFile(MultipartFile multipartFile) {
        String filePath = null;
        try {
            InputStream is = multipartFile.getInputStream();
            byte[] data = new byte[is.available()];
            is.read(data);

            String fileName = multipartFile.getOriginalFilename();
            filePath = UPLOAD_DIR + fileName;

            FileOutputStream fos = new FileOutputStream(filePath);
            fos.write(data);
            fos.flush();
            fos.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return filePath;
    }

    public static byte[] getFile(String filePath) {
        return new byte[0];
    }
}
