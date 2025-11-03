package mohamedcherif.repository;

import mohamedcherif.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Les méthodes CRUD (save, findById, findAll, deleteById) sont héritées de JpaRepository
}