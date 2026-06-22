import { Component, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  image: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class GalleryComponent implements AfterViewInit {
  // Zoom overlay state
  selectedImage = signal<string | null>(null);

  galleryItems: GalleryItem[] = [
    {
      title: 'Berry Cloud',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCShEloAecOmPL5HPJkQDglwX8UWgf8o24vVoElnO7r_ywoWvpe0WryGzJ4GejxdjICPArHyxhExzpb9y4mbJBJ5fpf6yUk1Sb0b6JFJg5ayOaRB7punVoVJk4-zH9vSeaNcR_9C4EkM7-iUT2rBYQBJWeQYc99jmGHxTsYhK-qouoFDmlEOgQayvrCcseJgijRzrrBWpgP49La-kDXfOvHcIlNVJXJsMNFzJObGS1jqb31m3ECS8v8AIzpgElQ9yxnooLh1w0R-QnS',
      alt: 'Handcrafted soy candle topped with realistic wax strawberries and pink cream frosting'
    },
    {
      title: 'Lunar Blossom',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN5cRkekc0RPbzL_9td7Cp2-DQAE17yM3oPNJQkY2yYe7MuR3yVH4YwaDwd2RGrUs6anix43Q_UOxFi9SUHAhcYpcYF70OQxcMyrEBz_YoSczNx4PLVmO1niZv09Kroh40qu7C-xs_6gtCf8rsX4fQyfFD1HMsDFYD5ntlnWDGHPwo6Ma1xneFjZvjWl8Fl8PVsJtiEvM1jcs11cyarpvEzshxj_wgd8R7cuRiWzih8KyYfXiPceeb3ZmvQhtaf9Lu5bvFu5niouZP',
      alt: 'Crescent moon wax frame embedded with small white wax flowers and twine ribbons'
    },
    {
      title: 'Azure Bloom',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4cD8DHK2vhkwk4S1n1ZDovqW8sQyGkktEkqC2ab3Dtki34F9xN1M1wamXqXK8_JTqHIRoDz4rt6ML91Rou9QeLCIwrvhmPx3Z3C_q633MmoujtdcNs5FP7a3ZRrbpF44uy12HVDtNbWswiPCYCl9h_EGWzpLop5pyst-lmq3QpUb8Yjf7G7b9GBBJCLMNyIoy2ScDJiOIvj9tF-zq8gC-zgg_a94zuvsEg_eCFfsulStpRJMHwUWJP4aQx_grJDapit9AlX_4GvvY',
      alt: 'Detailed soy wax flowers in varying shades of soft blue and white in glass jar'
    },
    {
      title: 'Blush Peony',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiE6RIaOT_fiACqqbD0BQIX3W3htoouNKnmQwqefOxrQZHNBdb3aOyuh2HQMVeFedtLtTNeaLeXSk_fGSpUfwFlObn7ID_bZCB3Q7-iNDRDwVW4hLWy60um-pUwOqnKu1UxJHpaEVm1kG2P2u1zoJzTGEHbl7XuDdFp0zfxb2TPsahgCu2aZLIQjA6UpMlUw9vGN-d2QVWnh1NMeMlOEoE8dDAGvAuk9G8zNj40fJ8xNwDyvxF4vXjTX3h29Cf1Suc86l1OOU65tnj',
      alt: 'Blush pink and cream handcrafted wax roses and peonies in glass vessel'
    },
    {
      title: 'The Garden Set',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhjV9hzZRrLiA-p5OU0hAgjRc-6Ix972T8O8jBR-rqsU1ozTt5ZpI-X_cgYBQd9tIJDm9kMxXlsG1Es_rO4qCWiyn2wPrQgb57H68ccMqjykrYVW9oNqns9Vbg5cPdWbSJvPKBM-EKepq3MY6oLFay3H80iePlH0F86Onn8boOaT7vBjRhAhKoHh9KXmXZfIllCG_hnbJwnQdZB__Ua1ZItHgSjg2UIqyA5Pzjqcamy3TPW7Y9N7qI_JKPhWFMchfNVnex_WR_ghQU',
      alt: 'Four clear glass jar candles resting on woven mat topped with detailed wax flowers'
    },
    {
      title: 'Terracotta Swirl',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7d7QpCCPhz3YTeUWwR1i20Z8nYwhxBm3UBoStZYlDVS4DM4XWA9CcJRQ7l9960Vm6jYytfilhyEmoY8fpg-igwdnxgwzH90qnGcCav2CZTdL5CdeoDUX-QXf4VaiaMbC2l6lcCyswWHiQ5I7ErMQjr0O4-zQwnAMZacAkhZaLkuI12Ig5UDMK05KwzMOaRwNZu3MbuxQtgMZsoeIPc_yihExXeCLaAGilYW6kLEUbYLnNcOImhdifNevnuMMEC2Q_uoXv1MVHRc9K',
      alt: 'Rounded spherical concrete candle vessels featuring swirling terracotta and cream patterns'
    },
    {
      title: 'Silk & Berry',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdrNh-0L3nQugr4HqwEzNhsBBwJ5ApcdIM6Wrh7YGC7BIHG19Oor1DmCOx40YWCOjMQr6AxesemNWlEJwZaFxOLfvqABx1ObJ9ai-ogx_CuvE1oyovbHYGwIzItKgrMV7lcXcTa22QaJkZc5OznSrQs42dW9-iM2lzVIdqFBb3e6FMTBwIW45oF6D-riuLdOAeXKPqdU2kUcnDkw_UJq_mQZa06aVswpTAlaDxuf_RelMgpsJ7jyMw4YBCpn2yxAiZpeEo3C4CWSbw',
      alt: 'Delicate glass votive with creamy soy wax adorned with five small wax strawberries on pink silk'
    }
  ];

  ngAfterViewInit() {
    this.initScrollReveal();
  }

  zoomImage(imageUrl: string) {
    this.selectedImage.set(imageUrl);
  }

  closeZoom() {
    this.selectedImage.set(null);
  }

  private initScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-gallery').forEach(el => observer.observe(el));
  }
}
