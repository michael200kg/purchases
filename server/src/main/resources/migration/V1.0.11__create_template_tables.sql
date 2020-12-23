ALTER TABLE purchase_item add ( active tinyint(1) NOT NULL default 1 );

ALTER TABLE purchase add ( purchase_template_id int(11) );

CREATE TABLE purchase_template (
                                   id int(11) NOT NULL AUTO_INCREMENT,
                                   name varchar(255) NOT NULL,
                                   text varchar(2000) DEFAULT NULL,
                                   username varchar(100) DEFAULT NULL,
                                   PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE purchase_template_item (
                                        id int(11) NOT NULL AUTO_INCREMENT,
                                        purchase_template_id int(11) NOT NULL,
                                        item_name varchar(255) NOT NULL,
                                        item_description varchar(2000) DEFAULT NULL,
                                        PRIMARY KEY (id),
                                        KEY purchase_template_item_FK (purchase_template_id),
                                        CONSTRAINT purchase_template_item_FK FOREIGN KEY (purchase_template_id) REFERENCES purchase_template (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
