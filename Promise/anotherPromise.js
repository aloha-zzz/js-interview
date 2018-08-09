class _Promise {
    constructor(fn) {
        this.status = 'pending';
        this.data = null;
        this.reason = null;
        this.resolveCb = [];
        this.rejectedCb = [];


        let resolve = function (data) {
            this.status = 'resolved';
            this.data = data;
            this.resolveCb.forEach(func => {
                func();
            })
        }

        let rejected = function (reason) {
            this.status = 'rejected';
            this.reason = reason;
            this.rejectedCb.forEach(func => {
                func();
            })
        }
        try {
            fn(resolve, rejected)
        } catch (e) {
            rejected(e)
        }
    }

    then(onResolve, onReject) {
        switch (this.status) {
            case 'pending':
                this.resolveCb.push(() => {
                    onResolve
                });
                this.rejectedCb.push(onReject)
                break;
            case 'resolve':
                let temp = onResolve(this.data);
                return new Promise((resolve, rejected) => {
                    resolve(temp)
                })
                break;
            case 'reject':
                onReject(this.data);
                break;
        }
    }
}