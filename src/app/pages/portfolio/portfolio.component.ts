import { Component } from '@angular/core';
export interface Portfolio {
  id: number;
  title?: string;
  imgSrc: string;
  description: string;
  category: string;
}
const portFolioJson : Portfolio[] = [
  { id: 1, category: "Christening" ,title: "Christening Decoration", description: "A fun and vibrant Christening celebration with a floral and photobooth setup.", imgSrc:"assets/img/portfolio/compressed/1.jpg"},
  { id: 2, category: "Corporate Event",  title: "Corporate Event Decoration", description: "A high-energy corporate dining event with a sleek, modern theme and eye-catching design", imgSrc:"assets/img/portfolio/compressed/2.jpg"},
  { id: 3, category: "Christening", title: "Christening Celebration", description: "A fun and vibrant Christening celebration with fancy chair setup and amazing entrance.", imgSrc:"assets/img/portfolio/compressed/3.jpg"},
  { id: 4, category: "Christening", title: "Christening Decoration", description: "", imgSrc:"assets/img/portfolio/compressed/4.jpg"},
  { id: 5, category: "Christening", title: "Birthday", description: "", imgSrc:"assets/img/portfolio/compressed/5.jpg"},
  { id: 6, category: "Christening", title: "Christening Celebration", description: "", imgSrc:"assets/img/portfolio/compressed/6.jpg"},
]
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  showModal: boolean = false;
  portfolioData: Portfolio[]  = portFolioJson;
  portfolioDetail: any;
  

  show(id: number) {
    //filter vs find
    //this.portfolioDetail = portFolioJson.filter(item => item.id ===id);
    this.portfolioDetail = portFolioJson.find(item => item.id ===id);
    console.log(this.portfolioDetail)
    this.showModal = true; // Show-Hide Modal Check

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
}
