## Best Rest API Guidelines

- Start Server

```bash
npm start
```

- Api documentation

```bash

http://localhost:3000/api-docs

```

## Designing RESTful API URLs: Best Practices for Clean and Intuitive Endpoints

### 1. **Use Identifiers in URLs Instead of Query Strings**

Bad practice:

```bash
/api?type=user&id=23
```

Good practice:

```bash
/users/23
```

**Real-life example:**

Think about a social media app like Twitter. If you want to see a specific user’s profile, the URL might look like this:

```arduino
https://twitter.com/users/12345
```

Here, `12345` is the **identifier** for the user. It’s clean and easy to read, compared to using a query string like `?type=user&id=12345`.

---

### 2. **Leverage Hierarchical Structure**

Bad practice:

```bash
/lineitems/8769/orders/33245/customers/1
```

Good practice:

```bash
/customers/1/orders/33245/lineitems/8769
```

**Real-life example:**

On Amazon, you might want to view an order for a specific customer and its line items (products in that order). A good URL structure could be:

```bash
https://amazon.com/customers/1/orders/33245/lineitems/8769
```

This structure implies that **line items belong to orders, and orders belong to customers.** It’s logical and mirrors how these resources are related in real life.

---

### 3. **Design for Clients, Not Your Data**

Bad practice:

```bash
/database12345/cust_table/user_row=3345
```

Good practice:

```bash
/customers/3345
```

**Real-life example:**

A ridesharing app like Uber would not expose its database details in the URL. Instead of:

```bash
https://uber.com/db1/riders_table?user_id=123
```

It would use:

```arduino
https://uber.com/riders/123
```

This makes the URL intuitive for users or developers interacting with the API.

---

### 4. **Resource Names Should Be Nouns**

Bad practice:

```bash
/getUserDetails/12345
```

Good practice:

```bash
/users/12345
```

**Real-life example:**

In a RESTful API for a blog platform, the URL for getting details about a post should be:

```bash
/posts/567
```

Instead of:

```bash
/getPostDetails/567
```

Use the **HTTP method** (like `GET`) to indicate the action. For instance, `GET /posts/567` retrieves the post.

---

### 5. **Use Plurals for Collections**

Bad practice:

```bash
/customer/1/order/8769
```

Good practice:

```bash
/customers/1/orders/8769
```

**Real-life example:**

On an e-commerce site like Flipkart, to view a specific customer’s order, you’d use:

```bash
https://flipkart.com/customers/1/orders/8769
```

Pluralization (`customers` and `orders`) emphasizes that these resources are **collections**, making it consistent across different endpoints.

---

### 6. **Avoid Collection Verbiage in URLs**

Bad practice:

```bash
/customer_list/1
```

Good practice:

```bash
/customers/1
```

**Real-life example:**

In a library management system, to view a list of all books:

```bash
/books
```

Instead of:

```bash
/book_list
```

---

### 7. **Use Lowercase in URLs**

Bad practice:

```
/Customers/1/Orders/8769
```

Good practice:

```bash
/customers/1/orders/8769
```

**Real-life example:**

GitHub uses lowercase URLs for simplicity:

```arduino
https://github.com/openai/chatgpt
```

Not:

```arduino
https://github.com/OpenAI/ChatGPT
```

---

### 8. **Keep URLs Short and Logical**

Bad practice:

```bash
/customers/1/orders/8769/products/lineitems/23/details
```

Good practice:

```bash
/customers/1/orders/8769/lineitems/23
```

**Real-life example:**

On Spotify, if you want to view details about a playlist, it would use:
