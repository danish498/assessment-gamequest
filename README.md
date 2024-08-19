# GameQuest

## Project Overview


1. **Landing Page**
2. **Product Page**
3. **Product Details Page**
4. **Cart Page**  [ Add this module to incorporate the state management completely from page first to last. 

### Features Implemented

#### Landing Page
- Two carousels are implemented as pet the instruction.

#### Product Page
- Implemented category filtering, sorting, and searching functionality.
- By default, all categories are selected.
  

#### Product Details Page
- Product details are displayed along with an image carousel.
- Users can view detailed information about each product.

#### Cart Page
- State management for adding items to the cart, updating quantities, and viewing cart contents.

### Sidebar and Header
- **Sidebar**: Opens on hover with smooth transition effects.
- **Header**: Includes cart and notification sections.

### Other
- From the landing page to the product details page, the "Add to Cart" functionality works seamlessly, updating the cart value accordingly.
- Axios instance created for API calls

## Folder Structure

- **assets**: Contains images and custom CSS logic.
- **pages**: Each page is organized under its respective feature folder.
- **components**: it has UI section, a common reusable components section, and the specific folder components
- **helpers**: Contains utility functions and other helpers.
- **styles**: Includes different fonts and custom styling as per the Figma design.
- **hooks**:  contain custom hooks, like useDebounce etc.
- **type**: typescript type and instance centrally

### Installation Steps

  ```bash

    git clone https://github.com/danish498/assessment-gamequest

    cd assessment-gamequest

    yarn

   yarn run dev
    

    ```

