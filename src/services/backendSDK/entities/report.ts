import {addEvidenceImage} from '../modules/reports'

class Report{
    constructor(
        public id: string,
        public complaintId: string,
        public created_at: Date
    ){}
    public addEvidenceImage(file: File){
        return addEvidenceImage(this.id, file); 
    }
}



class ReportCreate{
    constructor(

    ){}
}

export {
    Report,
    ReportCreate
}
