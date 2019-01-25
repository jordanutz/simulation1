insert into products
  (product_name, price, image_url)
  values
  ($1, $2, $3)
  returning *;
