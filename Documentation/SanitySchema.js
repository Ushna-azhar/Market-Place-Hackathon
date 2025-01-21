export default {
  name: 'clothingEcommerce',
  types: [

    
    {
      name: 'product',
      type: 'document',
      title: 'Product',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'price', type: 'number', title: 'Price' },
        { name: 'category', type: 'reference', to: [{ type: 'category' }] },
        { name: 'images', type: 'array', of: [{ type: 'image' }] },
        { name: 'stock', type: 'number', title: 'Stock Quantity' }
      ]
    },

  
    {
      name: 'category',
      type: 'document',
      title: 'Category',
      fields: [
        { name: 'name', type: 'string', title: 'Category Name' }
      ]
    },

   \
    {
      name: 'user',
      type: 'document',
      title: 'User',
      fields: [
        { name: 'name', type: 'string', title: 'Full Name' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'password', type: 'string', title: 'Password' }
      ]
    },

   
    {
      name: 'order',
      type: 'document',
      title: 'Order',
      fields: [
        { name: 'user', type: 'reference', to: [{ type: 'user' }] },
        { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
        { name: 'totalAmount', type: 'number', title: 'Total Amount' },
        { name: 'status', type: 'string', title: 'Order Status' }
      ]
    },

    
    {
      name: 'review',
      type: 'document',
      title: 'Review',
      fields: [
        { name: 'user', type: 'reference', to: [{ type: 'user' }] },
        { name: 'product', type: 'reference', to: [{ type: 'product' }] },
        { name: 'rating', type: 'number', title: 'Rating' },
        { name: 'comment', type: 'text', title: 'Comment' }
      ]
    }
  ]
};
