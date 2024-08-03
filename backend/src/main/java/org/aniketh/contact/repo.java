package org.aniketh.contact;

import org.springframework.data.jpa.repository.JpaRepository;

public interface repo extends JpaRepository<contact, Long> {
}

