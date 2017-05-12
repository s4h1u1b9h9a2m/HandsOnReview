package hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Shubhanshuc on 12/05/17.
 */

@SpringBootApplication
@Controller
public class HandsOnReview {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(HandsOnReview.class, args);
    }

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }

}
