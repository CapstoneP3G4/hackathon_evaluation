package com.fullstackbackend.controller;

import com.fullstackbackend.Helper.FileUploadHelper;
import com.fullstackbackend.model.Ideas;
import com.fullstackbackend.repository.IdeasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FileUploadController {

    @Autowired
    private IdeasRepository ideaRepository;

//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("ideaId") Long ideaId) {
//        try {
//            if (file.isEmpty()) {
//                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Request must contain file");
//            }
//
////            String filePath = String.valueOf(FileUploadHelper.uploadFile(file));
//            String filePath = FileUploadHelper.uploadFile(file);
//            if (filePath != null) {
//                Ideas idea = ideaRepository.findById(Math.toIntExact(ideaId)).orElse(null);
//                if (idea != null) {
//                    idea.setDemo(filePath);
//                    ideaRepository.save(idea);
//                    return ResponseEntity.ok("File uploaded successfully");
//                } else {
//                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Invalid idea ID");
//                }
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
//    }
@PostMapping("/upload")
public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("ideaId") Long ideaId) {
    try {
        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Request must contain file");
        }

        // Constructing the file name using team id and original file name
        String fileName = "upload/"+ file.getOriginalFilename();

        String filePath = FileUploadHelper.uploadFile(file);
        if (filePath != null) {
            Ideas idea = ideaRepository.findById(Math.toIntExact(ideaId)).orElse(null);
            if (idea != null) {
                idea.setDemo(fileName);
                ideaRepository.save(idea);
                return ResponseEntity.ok("File uploaded successfully");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Invalid idea ID");
            }
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
}



//    @GetMapping("/idea/{id}/demo")
//    public ResponseEntity<byte[]> getDemoFile(@PathVariable("id") Long ideaId) {
//        try {
//            Ideas idea = ideaRepository.findById(Math.toIntExact(ideaId)).orElse(null);
//            if (idea != null) {
//                String filePath = idea.getDemo();
//                if (filePath != null && !filePath.isEmpty()) {
//                    byte[] fileData = FileUploadHelper.getFile(filePath);
//                    if (fileData != null) {
//                        HttpHeaders headers = new HttpHeaders();
//                        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
//                        headers.setContentDisposition(ContentDisposition.builder("attachment").filename(idea.getTitle() + ".mp4").build());
//                        return new ResponseEntity<>(fileData, headers, HttpStatus.OK);
//                    }
//                }
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
//    }

}
