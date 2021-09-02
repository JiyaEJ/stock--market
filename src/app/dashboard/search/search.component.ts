import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();
  options: any[] = [ ];
  filteredOptions!: Observable<any[]>;
  currentData:any;
  hide:boolean=false;
  public searchForm: FormGroup;
  constructor(private api: ApiService,private fb:FormBuilder) {
    this.searchForm = this.fb.group({
      "keyword": new FormControl('', Validators.required)
    });
  }



  ngOnInit() {

    this.api.getAllStockData().subscribe((res: any) => {
      this.options=res;

    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }



  getCurrentDetails(id:any){
    const payload={
      userid:id
    }
    this.api.getCurrentStockData(payload).subscribe((res: any) => {
      this.hide=true;
      this.currentData=res.data;
    },error => {
      console.error(error);
    });
  }




}
