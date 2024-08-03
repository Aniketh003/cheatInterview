package org.aniketh.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = "http://localhost:3000")
public class controller {

    @Autowired
    private repo contactRepository;

    @GetMapping
    public List<contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @PostMapping
    public contact addContact(@RequestBody contact contact) {
        return contactRepository.save(contact);
    }

    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable Long id) {
        contactRepository.deleteById(id);
    }
}
