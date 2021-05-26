export class newTaskModel{
    public taskname:string;
    public tasktargetdate:string;
    public taskremark:string;
    public taskcompletiondate:string;
    public taskassigndate:any;
   

    setNewTaskFields(taskname:string,targetdate:string,taskremark:string)
    {
        this.taskname=taskname;
        this.taskassigndate=new Date();
        this.tasktargetdate=targetdate;
        this.taskremark=taskremark;
        this.taskcompletiondate="";
    }

    
}