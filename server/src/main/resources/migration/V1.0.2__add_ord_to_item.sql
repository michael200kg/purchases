alter table purchase_item add ord int(11);

update purchase_item
   set ord = id;

alter table purchase_template_item add ord int(11);

update purchase_template_item
set ord = id;

commit;
