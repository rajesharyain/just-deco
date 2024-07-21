import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio.service';
export interface Portfolio {
  id: number;
  title?: string;
  imgSrc: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  showModal: boolean = false;
  portfolioData: Portfolio[] = [];
  portfolioDetail: any;

  constructor(private portfolioService: PortfolioService) {

  }
  ngOnInit(): void {
    this.portfolioService.getPortfolios().subscribe(
      data => {
        this.portfolioData = data;
      },
      error => {
        console.error('Error fetching portfolios', error);
      }
    );
  }

  show(id: number) {
    //filter vs find
    //this.portfolioDetail = portFolioJson.filter(item => item.id ===id);
    this.portfolioDetail = this.portfolioData.find(item => item.id === id);
    //console.log(this.portfolioDetail)
    this.showModal = true; // Show-Hide Modal Check

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
}
