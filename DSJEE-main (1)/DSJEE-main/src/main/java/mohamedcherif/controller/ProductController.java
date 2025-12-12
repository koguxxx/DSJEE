package mohamedcherif.controller;

import mohamedcherif.model.Product;
import mohamedcherif.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:8082")
public class ProductController {


    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // 1. CREATE (POST /api/products)
    @PostMapping
    public ResponseEntity<Product> create(@Valid @RequestBody Product product) {
        Product p = productService.save(product);
        return ResponseEntity.status(201).body(p);
    }

    // 2. READ All (GET /api/products)
    @GetMapping
    public List<Product> getAll() {
        return productService.getAll();
    }

    // 3. READ By ID (GET /api/products/{id})
    // Correction: Séparation de l'annotation @GetMapping
    @GetMapping("/{id}")
    public ResponseEntity<Product> getById(@PathVariable Long id) {
        return productService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 4. UPDATE (PUT /api/products/{id}) - AJOUT DE LA LOGIQUE
    @PutMapping("/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id, @Valid @RequestBody Product productDetails) {
        return productService.getById(id)
                .map(existingProduct -> {
                    // Mise à jour des champs
                    existingProduct.setName(productDetails.getName());
                    existingProduct.setPrice(productDetails.getPrice());
                    existingProduct.setStockQuantity(productDetails.getStockQuantity());

                    Product updatedProduct = productService.save(existingProduct);
                    return ResponseEntity.ok(updatedProduct);
                })
                .orElseGet(() -> ResponseEntity.notFound().build()); // 404 si le produit n'existe pas
    }

    // 5. DELETE (DELETE /api/products/{id})
    // Correction: Séparation de l'annotation @DeleteMapping
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        // Logique de vérification si l'élément existe avant de supprimer peut être ajoutée
        productService.delete(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }
}
