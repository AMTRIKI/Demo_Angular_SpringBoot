package isetch.demo;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "*")

public class MainController{
 	@GetMapping("/getHello/{name}")
    public Message getHelloMessage(@PathVariable("name") String name){        
        Message m = new Message();
        m.setMessage("Bonjour "+ name);        
        return m;
    }
}