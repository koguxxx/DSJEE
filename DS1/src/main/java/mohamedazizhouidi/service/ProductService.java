package mohamedazizhouidi.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // CREATE / UPDATE
    public Product save(Product product) {
        return productRepository.save(product);
    }

    // READ All
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    // READ By ID
    public Optional<Product> getById(Long id) {
        return productRepository.findById(id);
    }

    // DELETE
    public void delete(Long id) {
        productRepository.deleteById(id);
    }
}