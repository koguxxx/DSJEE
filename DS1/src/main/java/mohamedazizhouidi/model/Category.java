package mohamedazizhouidi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.util.List;
import jakarta.persistence.OneToMany;

@Entity
public class Category {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    private String description;

    @OneToMany(mappedBy = "category")
    private List<Product> products;

    // getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public List<Product> getProducts() { return products; }
    public void setProducts(List<Product> products) { this.products = products; }
}
