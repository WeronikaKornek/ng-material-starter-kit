import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  styleUrls: ['./employee.component.scss'],
  templateUrl: './employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {
  readonly employeeForm: FormGroup = new FormGroup(
    {
      name: new FormControl(),
      salary: new FormControl(),
      age: new FormControl()
    });

  constructor(private _employeeService: EmployeeService) {
  }

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._employeeService.create({
      employee_name: employeeForm.get('name')?.value,
      employee_age: employeeForm.get('age')?.value,
      employee_salary: employeeForm.get('salary')?.value,
    }).subscribe();
  }
}
