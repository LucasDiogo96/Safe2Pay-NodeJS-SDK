function SubscriptionRequest() {
    this.Plan = null;
    this.IsSandbox = true;
    this.ChargeDate = new Date();
    this.Customer = true;
    this.SubscriptionObject = null;
}

 module.exports = SubscriptionRequest;