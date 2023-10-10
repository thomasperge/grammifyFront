import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { TextareaOutputService } from 'src/app/services/textarea-output.service';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent {
  constructor(private clipboardService: ClipboardService, private textareaOutputService: TextareaOutputService) {}

  copyToClipboard() {
    const textToCopy = this.textareaOutputService.getOutputData()
    this.clipboardService.copy(textToCopy);
  }
}
