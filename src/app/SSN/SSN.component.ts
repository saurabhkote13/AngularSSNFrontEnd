import { Component } from '@angular/core'
import { SSNService } from './SSN.Service';
import { FormGroup, FormControl, Validators
 } from '@angular/forms'
@Component({
    selector: 'app-ssn',
    templateUrl: './SSN.component.html',
    styleUrls: ['./SSN.component.scss'],
    providers: [SSNService]
})
export class SSNComponent {
    enroll: FormGroup;
    verify:FormGroup
    isSubmitted = false
    post: any
    post2: any
    post3: any
    constructor(private cs: SSNService) {
        this.enroll = new FormGroup({
            fname: new FormControl('',[Validators.required,Validators.minLength(3)]),
            lname: new FormControl('',[Validators.required,Validators.minLength(3)]),
            dob: new FormControl('',[Validators.required]),
            gender: new FormControl('',Validators.required),
            stateName: new FormControl('',Validators.required)
        })
        this.verify =new FormGroup({
            ssn:new FormControl(),
            state:new FormControl()
        })
    }
    public PostData2(data: any) {
        this.isSubmitted = true;
        let msg = "Enrollment Successfull";
        let errmsg = "Enrollment Failed";
        if (this.enroll.valid) {
            return this.cs.PostData(data).subscribe(
                req => { this.post = msg },
                err => { this.post = errmsg }
            )
        }
    }
    public GetStates2() {
        return this.cs.GetStates().subscribe(
            req => { this.post2 = req },
            err => { this.post2 = err }
        )
    }
    public GetVerification2(data:any) {
        let msg = "Valid Social Security Number";
        let errmsg = "In-Valid Social Security Number";
        return this.cs.GetVerification(data).subscribe(
            req => { this.post3 = msg },
            err => { this.post3 = err }
        )
    }
}