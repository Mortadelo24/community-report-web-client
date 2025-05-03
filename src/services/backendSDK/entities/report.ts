

class Report{
    constructor(
        public id: string,
        public complaintId: string,
        public created_at: Date
    ){}
}

class ReportCreate{
    constructor(

    ){}
}

export {
    Report,
    ReportCreate
}
