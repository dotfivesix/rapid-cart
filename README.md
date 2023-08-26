###### *(Under Development)*
# RapidCart
Welcome to RapidCart, your all-in-one online shopping platform designed to provide you with a seamless and exciting shopping experience. RapidCart offers a vast selection of products from various categories, ensuring that you find exactly what you're looking for.
## Usage
- **Authentication** : Sign up with a first name, last name, username, email, and password. Log in with username/email and password (you don't need this if you have a token). You need either your email or username to get password reset.
- **Products** : You can explore products and categories with various filters. A user can put max 25 products in cart at a time (since this is a demo project, payment integration is also fake). You can explore products and even add to cart but to buy a product, an account is necessary.
- **User** : You can manage your profile, update or delete account details, check notifications, check cart, see coupons available and track orders.
- **Seller** : You can join seller program, if you have already joined then manage your products. You can upload, edit and delete a product, reply to questions, track orders and see analytics.
## Technologies Used In This Project
- NextJS
- Tailwind
- ESLint
- Typescript
- NPM
- MongoDB
- FakerJS
- Vercel
## Routes
- **/**
- **/sign-up**
- **/log-in**
- **/password-reset**
- **/categories/:category-name?**
- **/product/search?query**
- **/product/:product-label-product-id?**
- **/user**
- **/user/notifications**
- **/user/settings**
- **/user/profile**
- **/user/details**
- **/user/products**
- **/user/orders**
- **/user/cart**
- **/user/analytics**
- **/seller**
- **/seller/upload**
- **/seller/product/:productId**
- **/seller/questions**
- **/seller/orders**
- **/admin**
- **/admin/products**
- **/admin/categories**
- **/admin/products**
- **/admin/users**