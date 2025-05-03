export interface IForm {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  form_data: {
    [key: string]: any;
  };
}

class Form implements IForm {
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly created_at: string;
  public readonly updated_at: string;
  public readonly user_id: string;
  public readonly form_data: {
    [key: string]: any;
  };

  constructor(formData: IForm) {
    this.id = formData.id;
    this.name = formData.name;
    this.description = formData.description;
    this.created_at = formData.created_at;
    this.updated_at = formData.updated_at;
    this.user_id = formData.user_id;
    this.form_data = formData.form_data;
  }
}

export default IForm;
