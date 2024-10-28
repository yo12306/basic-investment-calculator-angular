import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject} from '@angular/core';
import { InvestMentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestMentService);

  results = computed(() => this.investmentService.resultsData());
}
