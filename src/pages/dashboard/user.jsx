import avt from '../../assets/img/user/avatar-trang-4.jpg';


const User = () => {
    return (
        <>
            <div class="container light-style flex-grow-1 container-p-y">

<h4 class="font-weight-bold py-3 mb-4">
Account settings
</h4>

        <div class="card overflow-hidden">
        <div class="row no-gutters row-bordered row-border-light">
            <div class="col-md-3 pt-0">
                            <div class="list-group list-group-flush account-settings-links">
                                <a class="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">General</a>
                                <a class="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Change password</a>
                                <a class="list-group-item list-group-item-action" data-toggle="list" href="#account-info">Info</a>
                                <a class="list-group-item list-group-item-action" data-toggle="list" href="#account-social-links">Social links</a>
                                <a class="list-group-item list-group-item-action" data-toggle="list" href="#account-connections">Connections</a>
                                <a class="list-group-item list-group-item-action" data-toggle="list" href="#account-notifications">Notifications</a>
                            </div>
            </div>
    <div class="col-md-9">
                <div class="tab-content">
                                        <div class="tab-pane fade active show" id="account-general">

                                                <div class="card-body media align-items-center">
                                                    <img src={avt} class="d-block ui-w-80"/>
                                                    
                                                </div>
                                        </div>
                </div>
    </div>

                            <div class="text-right mt-3">
                            <button type="button" class="btn btn-primary">Save changes</button>&nbsp;
                            <button type="button" class="btn btn-default">Cancel</button>
                            </div>

        </div>
        </div>
</div>
        </>
    )
}

export default User